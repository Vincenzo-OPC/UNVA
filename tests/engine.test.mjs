import test from "node:test";
import assert from "node:assert/strict";
import {createPack,makeZip,choosePlatform} from "../src/engine.js";
import {tasks,platforms} from "../src/catalog.js";
test("catalog has distinct valid tasks and platforms",()=>{
 assert.equal(new Set(tasks.map(t=>t.id)).size,tasks.length);
 assert.equal(new Set(platforms.map(t=>t.id)).size,platforms.length);
 assert.ok(tasks.length>=5);
});
test("cross-industry selection creates all required files without invented deployment",()=>{
 const p=createPack({taskIds:["inbox","support","research"],platformId:"hermes",role:"General Assistant"});
 assert.deepEqual(Object.keys(p.files).sort(),["PLATFORM_SETUP.md","README.md","SKILL.md","TESTS.md","manifest.json"].sort());
 assert.match(p.files["SKILL.md"],/^---\nname: unva-/);
 assert.match(p.files["TESTS.md"],/synthetic test cases/);
 assert.match(p.files["PLATFORM_SETUP.md"],/Hermes Agent/);
 assert.equal(JSON.parse(p.files["manifest.json"]).actions_executed,false);
});
test("auto recommendation is a labeled suggestion, not a benchmark",()=>{
 assert.equal(choosePlatform("auto").id,"grok");
 const p=createPack({taskIds:["crm"],platformId:"auto",role:"Operations Manager"});
 assert.match(p.files["PLATFORM_SETUP.md"],/Suggested starting platform/);
 assert.match(p.files["README.md"],/not a deployed bot/);
});
test("reject invalid and duplicated inputs",()=>{
 for(const taskIds of [[],["inbox","inbox"],["bogus"],["inbox","crm","research","support","operations"]]){
  assert.throws(()=>createPack({taskIds,platformId:"auto",role:"General Assistant"}));
 }
 assert.throws(()=>createPack({taskIds:["inbox"],platformId:"imposter",role:"VA"}));
 assert.throws(()=>createPack({taskIds:["inbox"],platformId:"grok",role:"bad\nname"}));
});
test("zip archive has local header, central directory, and expected file count",async()=>{
 const files=createPack({taskIds:["scheduling"],platformId:"dots",role:"Executive Assistant"}).files;
 const bytes=new Uint8Array(await makeZip(files).arrayBuffer());
 const dv=new DataView(bytes.buffer);
 assert.equal(dv.getUint32(0,true),0x04034b50);
 assert.equal(dv.getUint32(bytes.length-22,true),0x06054b50);
 assert.equal(dv.getUint16(bytes.length-12,true),Object.keys(files).length);
 assert.ok(bytes.length>2000);
});