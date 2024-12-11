export type FileType = "file" | "folder";
export type ActionType="Copy"|"Delete"|"rename"

type FileMeta = "js" | "ts" | "html" | "css" | "img" | "svg" | string;


export interface FolderStructure {
  type: FileType;
  name: string;
  data?: FolderStructure[];
  meta?: FileMeta;
}

export type FilesData = FolderStructure;