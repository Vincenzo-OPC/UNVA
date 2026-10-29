import {tasks,platforms} from "./catalog.js";
import {choosePlatform,createPack,makeZip} from "./engine.js";
const $=id=>document.getElementById(id);
const state={taskIds:["inbox","scheduling"],platformId:"auto"};
const taskOptions=$("taskOptions"),chosen=$("chosenTasks"),agentOptions=$("agentOptions");
function element(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!=null)el.textContent=text;return el;}
function toggleTask(id){
 if(state.taskIds.includes(id))state.taskIds=state.taskIds.filter(x=>x!==id);
 else if(state.taskIds.length<4)state.taskIds.push(id);
 else {setStatus("Choose up to four tasks. Remove one to add another.");return;}
 if(!state.taskIds.length){state.taskIds=[id];setStatus("Keep at least one task selected.");}
 render();
}
function setStatus(text){$("builderStatus").textContent=text;}
function renderTasks(){
 taskOptions.replaceChildren();chosen.replaceChildren();
 for(const t of tasks){
  const b=element("button","task-chip",t.label);b.type="button";b.dataset.task=t.id;b.draggable=true;b.setAttribute("aria-pressed",String(state.taskIds.includes(t.id)));b.addEventListener("click",()=>toggleTask(t.id));
  b.addEventListener("dragstart",e=>{e.dataTransfer?.setData("text/plain",t.id);if(e.dataTransfer)e.dataTransfer.effectAllowed="copy";});
  taskOptions.append(b);
 }
 for(const id of state.taskIds){const t=tasks.find(x=>x.id===id);chosen.append(element("span","chosen-task",t.label+" ✓"));}
}
function renderAgents(){
 agentOptions.replaceChildren();
 for(const p of platforms){
  const l=element("label","agent-card");const i=element("input");i.type="radio";i.name="platform";i.value=p.id;i.checked=state.platformId===p.id;i.addEventListener("change",()=>{state.platformId=p.id;renderPreview();});
  const mark=element("span","agent-mark",p.symbol);mark.setAttribute("aria-hidden","true");
  const texts=element("span");texts.append(element("strong","",p.name),element("small","",p.short));l.append(i,mark,texts);agentOptions.append(l);
 }
}
function renderPreview(){
 const selected=state.taskIds.map(id=>tasks.find(t=>t.id===id)),p=choosePlatform(state.platformId);
 $("recommendedAgent").textContent=p.name;
 $("platformNote").textContent=(state.platformId==="auto"?"Starter recommendation. Not a measured ranking. ":"")+p.note;
 const list=$("previewSteps");list.replaceChildren();
 selected.flatMap(t=>t.steps.slice(0,2)).slice(0,6).forEach(step=>list.append(element("li","",step)));
 setStatus("Includes SKILL.md, platform guide, manifest and tests.");
}
function render(){renderTasks();renderPreview();}
const drop=$("taskDrop");
drop.addEventListener("dragover",e=>{e.preventDefault();drop.classList.add("is-over");});
drop.addEventListener("dragleave",()=>drop.classList.remove("is-over"));
drop.addEventListener("drop",e=>{e.preventDefault();drop.classList.remove("is-over");const id=e.dataTransfer?.getData("text/plain");if(tasks.some(t=>t.id===id)&&!state.taskIds.includes(id))toggleTask(id);});
function selection(){return {taskIds:state.taskIds,platformId:state.platformId,role:$("role").value};}
function triggerDownload(blob,filename){const url=URL.createObjectURL(blob),a=element("a");a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
$("downloadPack").addEventListener("click",()=>{try{const pack=createPack(selection());triggerDownload(makeZip(pack.files),"UNVA-setup-pack.zip");setStatus("Setup pack downloaded. Test with synthetic data before connecting real apps.");}catch(e){setStatus("Couldn't generate pack: "+e.message);}});
$("copyPrompt").addEventListener("click",async()=>{try{const p=createPack(selection());await navigator.clipboard.writeText(p.files["PLATFORM_SETUP.md"]);setStatus("Copied setup instructions. Review them before using with an agent.");}catch(e){setStatus("Copy unavailable here. Download the ZIP and open PLATFORM_SETUP.md instead.");}});
document.querySelectorAll("[data-preset]").forEach(link=>link.addEventListener("click",()=>{state.taskIds=[link.dataset.preset];render();}));
$("role").addEventListener("change",renderPreview);
renderAgents();render();