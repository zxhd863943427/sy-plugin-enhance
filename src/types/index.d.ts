/**
 * Copyright (c) 2023 frostime. All rights reserved.
 */

/**
 * Frequently used data structures in SiYuan
 */
type DocumentId = string;
type BlockId = string;
type NotebookId = string;
type PreviousID = BlockId;
type ParentID = BlockId | DocumentId;

type Notebook = {
  id: NotebookId;
  name: string;
  icon: string;
  sort: number;
  closed: boolean;
};

type NotebookConf = {
  name: string;
  closed: boolean;
  refCreateSavePath: string;
  createDocNameTemplate: string;
  dailyNoteSavePath: string;
  dailyNoteTemplatePath: string;
};

type BlockType =
  | "d"
  | "s"
  | "h"
  | "t"
  | "i"
  | "p"
  | "f"
  | "audio"
  | "video"
  | "other";

type BlockSubType =
  | "d1"
  | "d2"
  | "s1"
  | "s2"
  | "s3"
  | "t1"
  | "t2"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "table"
  | "task"
  | "toggle"
  | "latex"
  | "quote"
  | "html"
  | "code"
  | "footnote"
  | "cite"
  | "collection"
  | "bookmark"
  | "attachment"
  | "comment"
  | "mindmap"
  | "spreadsheet"
  | "calendar"
  | "image"
  | "audio"
  | "video"
  | "other";

type Block = {
  id: BlockId;
  parent_id?: BlockId;
  root_id: DocumentId;
  hash: string;
  box: string;
  path: string;
  hpath: string;
  name: string;
  alias: string;
  memo: string;
  tag: string;
  content: string;
  fcontent?: string;
  markdown: string;
  length: number;
  type: BlockType;
  subtype: BlockSubType;
  /** string of { [key: string]: string }
   * For instance: "{: custom-type=\"query-code\" id=\"20230613234017-zkw3pr0\" updated=\"20230613234509\"}"
   */
  ial?: string;
  sort: number;
  created: string;
  updated: string;
};

type doOperation = {
  action: string;
  data: string;
  id: BlockId;
  parentID: BlockId | DocumentId;
  previousID: BlockId;
  retData: null;
};

interface Window {
  siyuan: {
    notebooks: any;
    menus: any;
    dialogs: any;
    blockPanels: any;
    storage: any;
    user: any;
    ws: any;
    languages: any;
  };
}

有什么可以帮你的吗

{
                "dom": "\u003cdiv data-subtype=\"h4\" data-node-id=\"20231209192154-n9bg42p\" data-node-index=\"1\" data-type=\"NodeHeading\" class=\"h4\" updated=\"20231209192154\"\u003e\u003cdiv contenteditable=\"true\" spellcheck=\"false\"\u003e\u003cspan data-type=\"block-ref\" data-subtype=\"d\" data-id=\"20200813093015-u6bopdt\"\u003e常见问题\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"protyle-attr\" contenteditable=\"false\"\u003e​\u003c/div\u003e\u003c/div\u003e\u003cdiv data-node-id=\"20231209192154-cfzg6wx\" data-node-index=\"2\" data-type=\"NodeParagraph\" class=\"p\" updated=\"20231209192158\"\u003e\u003cdiv contenteditable=\"true\" spellcheck=\"false\"\u003e这是另外一些内容\u003c/div\u003e\u003cdiv class=\"protyle-attr\" contenteditable=\"false\"\u003e​\u003c/div\u003e\u003c/div\u003e\u003cdiv data-node-id=\"20231209201114-ewese15\" data-node-index=\"3\" data-type=\"NodeParagraph\" class=\"p\" updated=\"20231209201549\"\u003e\u003cdiv contenteditable=\"true\" spellcheck=\"false\"\u003e1\u003c/div\u003e\u003cdiv class=\"protyle-attr\" contenteditable=\"false\"\u003e​\u003c/div\u003e\u003c/div\u003e\u003cdiv data-node-id=\"20231209201550-h4rtw9j\" data-node-index=\"4\" data-type=\"NodeParagraph\" class=\"p\" updated=\"20231209201551\"\u003e\u003cdiv contenteditable=\"true\" spellcheck=\"false\"\u003e222\u003c/div\u003e\u003cdiv class=\"protyle-attr\" contenteditable=\"false\"\u003e​\u003c/div\u003e\u003c/div\u003e\u003cdiv data-node-id=\"20231209201115-w8k3z8k\" data-node-index=\"5\" data-type=\"NodeParagraph\" class=\"p\" custom-attr-pic-overlay=\"[\u0026#123;\u0026quot;left\u0026quot;:195.91979434447302,\u0026quot;top\u0026quot;:141.87735470941885,\u0026quot;width\u0026quot;:80,\u0026quot;height\u0026quot;:80,\u0026quot;angle\u0026quot;:0,\u0026quot;cID\u0026quot;:\u0026quot;1\u0026quot;\u0026#125;,\u0026#123;\u0026quot;left\u0026quot;:274.879177377892,\u0026quot;top\u0026quot;:315.6681362725451,\u0026quot;width\u0026quot;:80,\u0026quot;height\u0026quot;:80,\u0026quot;angle\u0026quot;:0,\u0026quot;cID\u0026quot;:\u0026quot;2\u0026quot;\u0026#125;,\u0026#123;\u0026quot;left\u0026quot;:95.97120822622107,\u0026quot;top\u0026quot;:348.62845691382773,\u0026quot;width\u0026quot;:80,\u0026quot;height\u0026quot;:80,\u0026quot;angle\u0026quot;:0,\u0026quot;cID\u0026quot;:\u0026quot;3\u0026quot;\u0026#125;]\" updated=\"20231209202311\"\u003e\u003cdiv contenteditable=\"true\" spellcheck=\"false\"\u003e​\u003cspan contenteditable=\"false\" data-type=\"img\" class=\"img\"\u003e\u003cspan\u003e \u003c/span\u003e\u003cspan\u003e\u003cspan class=\"protyle-action protyle-icons\"\u003e\u003cspan class=\"protyle-icon protyle-icon--only\"\u003e\u003csvg class=\"svg\"\u003e\u003cuse xlink:href=\"#iconMore\"\u003e\u003c/use\u003e\u003c/svg\u003e\u003c/span\u003e\u003c/span\u003e\u003cimg src=\"assets/01118-20231117222624-33j304j.jpeg\" data-src=\"assets/01118-20231117222624-33j304j.jpeg\" alt=\"01118\" /\u003e\u003cspan class=\"protyle-action__drag\"\u003e\u003c/span\u003e\u003cspan class=\"protyle-action__title\"\u003e\u003c/span\u003e\u003c/span\u003e\u003cspan\u003e \u003c/span\u003e\u003c/span\u003e11111111111111111111111111111\u003c/div\u003e\u003cdiv class=\"protyle-attr\" contenteditable=\"false\"\u003e​\u003c/div\u003e\u003c/div\u003e\u003cdiv data-node-id=\"20231209201612-j4xk4o3\" data-node-index=\"6\" data-type=\"NodeParagraph\" class=\"p\"\u003e\u003cdiv contenteditable=\"true\" spellcheck=\"false\"\u003e\u003c/div\u003e\u003cdiv class=\"protyle-attr\" contenteditable=\"false\"\u003e​\u003c/div\u003e\u003c/div\u003e",
                "blockPaths": [
                    {
                        "id": "20231209191517-edsovn8",
                        "name": "test/daily note/2023/12/2023-12-09",
                        "type": "NodeDocument",
                        "subType": "",
                        "children": null
                    },
                    {
                        "id": "20231209192143-tgd80bt",
                        "name": "层级测试",
                        "type": "NodeHeading",
                        "subType": "h3",
                        "children": null
                    },
                    {
                        "id": "20231209192154-n9bg42p",
                        "name": "常见问题",
                        "type": "NodeHeading",
                        "subType": "h4",
                        "children": null
                    }
                ],
                "expand": true
            }



interface BlockPath {
  id: string;
  name: string;
  type: string;
  subType: string;
  children: any; // You might want to replace `any` with a more specific type
}

interface backlinkData {
  dom: string;
  blockPaths: BlockPath[];
  expand: boolean;
}[]
