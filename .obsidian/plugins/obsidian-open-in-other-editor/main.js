/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => OpenFilePlg
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var os = __toESM(require("os"));
function runCMD(cmd) {
  const { exec } = require("child_process");
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`run cmd err: ${error}, ${stdout}, ${stderr}`);
      return;
    }
    console.log(`run cmd: ${cmd}`);
  });
}
var OpenFilePlg = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "open-in-other-editor-gvim",
      name: "Open current active file in gVim",
      callback: () => {
        this.open("gvim");
      }
    });
    this.addCommand({
      id: "open-in-other-editor-vscode",
      name: "Open current active file in VScode",
      callback: () => {
        this.open("code");
      }
    });
  }
  onunload() {
  }
  open(by) {
    var _a;
    let curFilePath = (_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path;
    if (!curFilePath) {
      console.warn("no active file in workspace");
      return;
    }
    let cwd = this.app.vault.adapter.getResourcePath(".");
    cwd = cwd.replace("app://local/", "").replace(/\?\d+.*?/, "");
    if (os.type() === "Windows_NT") {
      runCMD(`cd /d ${cwd} && ${by} ./"${curFilePath}"`);
    } else {
      runCMD(`cd ${cwd} && ${by} ./"${curFilePath}"`);
    }
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vb2JzaWRpYW4tb3Blbi1pbi1vdGhlci1lZGl0b3IvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gcnVuQ01EKGNtZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgeyBleGVjIH0gPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcclxuICBleGVjKGNtZCwgKGVycm9yOiBzdHJpbmcsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHJ1biBjbWQgZXJyOiAke2Vycm9yfSwgJHtzdGRvdXR9LCAke3N0ZGVycn1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYHJ1biBjbWQ6ICR7Y21kfWApO1xyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5GaWxlUGxnIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdvcGVuLWluLW90aGVyLWVkaXRvci1ndmltJyxcclxuXHRcdFx0bmFtZTogJ09wZW4gY3VycmVudCBhY3RpdmUgZmlsZSBpbiBnVmltJyxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9wZW4oXCJndmltXCIpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnb3Blbi1pbi1vdGhlci1lZGl0b3ItdnNjb2RlJyxcclxuXHRcdFx0bmFtZTogJ09wZW4gY3VycmVudCBhY3RpdmUgZmlsZSBpbiBWU2NvZGUnLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub3BlbihcImNvZGVcIilcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb3BlbihieSA6IFwiZ3ZpbVwifCBcImNvZGVcIikge1xyXG5cdFx0bGV0IGN1ckZpbGVQYXRoID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGF0aFxyXG5cdFx0aWYgKCFjdXJGaWxlUGF0aCkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJubyBhY3RpdmUgZmlsZSBpbiB3b3Jrc3BhY2VcIik7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0bGV0IGN3ZCA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuZ2V0UmVzb3VyY2VQYXRoKFwiLlwiKVxyXG5cdFx0Y3dkID0gY3dkLnJlcGxhY2UoXCJhcHA6Ly9sb2NhbC9cIiwgXCJcIikucmVwbGFjZSgvXFw/XFxkKy4qPy8sIFwiXCIpXHJcblx0XHRpZiAob3MudHlwZSgpID09PSBcIldpbmRvd3NfTlRcIikge1xyXG5cdFx0XHRydW5DTUQoYGNkIC9kICR7Y3dkfSAmJiAke2J5fSAuL1wiJHtjdXJGaWxlUGF0aH1cImApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRydW5DTUQoYGNkICR7Y3dkfSAmJiAke2J5fSAuL1wiJHtjdXJGaWxlUGF0aH1cImApXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBdUI7QUFDdkIsU0FBb0I7QUFHcEIsZ0JBQWdCLEtBQWE7QUFDM0IsUUFBTSxFQUFFLFNBQVMsUUFBUTtBQUN6QixPQUFLLEtBQUssQ0FBQyxPQUFlLFFBQWdCLFdBQW1CO0FBQzNELFFBQUksT0FBTztBQUNULGNBQVEsTUFBTSxnQkFBZ0IsVUFBVSxXQUFXLFFBQVE7QUFDM0Q7QUFBQSxJQUNGO0FBQ0EsWUFBUSxJQUFJLFlBQVksS0FBSztBQUFBLEVBQy9CLENBQUM7QUFDSDtBQUNBLElBQXFCLGNBQXJCLGNBQXlDLHVCQUFPO0FBQUEsRUFDL0MsTUFBTSxTQUFTO0FBRWQsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFDZixhQUFLLEtBQUssTUFBTTtBQUFBLE1BQ2pCO0FBQUEsSUFDRCxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFDZixhQUFLLEtBQUssTUFBTTtBQUFBLE1BQ2pCO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBRUEsV0FBVztBQUFBLEVBQ1g7QUFBQSxFQUVBLEFBQVEsS0FBSyxJQUFxQjtBQXJDbkM7QUFzQ0UsUUFBSSxjQUFjLFdBQUssSUFBSSxVQUFVLGNBQWMsTUFBakMsbUJBQW9DO0FBQ3RELFFBQUksQ0FBQyxhQUFhO0FBQ2pCLGNBQVEsS0FBSyw2QkFBNkI7QUFDMUM7QUFBQSxJQUNEO0FBQ0EsUUFBSSxNQUFNLEtBQUssSUFBSSxNQUFNLFFBQVEsZ0JBQWdCLEdBQUc7QUFDcEQsVUFBTSxJQUFJLFFBQVEsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLFlBQVksRUFBRTtBQUM1RCxRQUFJLEFBQUcsUUFBSyxNQUFNLGNBQWM7QUFDL0IsYUFBTyxTQUFTLFVBQVUsU0FBUyxjQUFjO0FBQUEsSUFDbEQsT0FBTztBQUNOLGFBQU8sTUFBTSxVQUFVLFNBQVMsY0FBYztBQUFBLElBQy9DO0FBQUEsRUFDRDtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
