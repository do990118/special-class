export function getNode(node, context = document) {
  if (typeof node !== "string") {
    throw new Error("getNode의 첫 번째 인수는 문자 타입 이어야 합니다!");
  }

  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

export function addClass(node, className) {
  // const node = 'h1';
  // const className = 'hello';

  // node 문자일때만

  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    throw new TypeError(
      "addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  node.classList.add(className);
}

export function removeClass(node, cn) {
  if (typeof node === "string") node = getNode(node);

  if (typeof cn !== "string" && cn !== undefined) {
    throw new TypeError(
      "removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  if (!cn) {
    node.className = "";
    return;
  }

  node.classList.remove(cn);
}

function getCss(node, prop) {
  if (typeof node === "string") node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new TypeError(
      "getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다."
    );
  }

  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new TypeError(
      "setCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다."
    );
  }
  if (!value)
    throw new SyntaxError("setCss 함수의 세 번째 인수는 필수 입력값 입니다.");

  node.style[prop] = value;
}

export const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

function getAttr(node, prop) {
  // validation

  // node 문자라면? => getNode
  if (typeof node === "string") node = getNode(node);

  // prop 문자가 아니라면? => error
  if (typeof prop !== "string") throw new Error("...");

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  // node 문자라면? => getNode
  if (typeof node === "string") node = getNode(node);

  // prop 문자가 아니라면? => error
  if (typeof prop !== "string") throw new Error("...");

  // value 없다면? => error
  if (!value) throw new Error("...");

  node.setAttribute(prop, value);
}

export const attr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);
