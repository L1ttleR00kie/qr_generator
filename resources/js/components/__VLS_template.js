import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, downloadWithBackground, url, handleMouseDown, handleMouseUp, handleMouseScroll } from './secret.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.input;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.img;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["input"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{ onChange: {} as any, }, type: ("file"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, type: ("file"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
let __VLS_10 = { 'change': __VLS_pickEvent(__VLS_9['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onChange) };
__VLS_10 = { change: (__VLS_ctx.handleFileUpload) };
}
{
const __VLS_11 = __VLS_intrinsicElements["button"];
const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
const __VLS_13 = __VLS_12({ ...{ onClick: {} as any, }, type: ("button"), class: ("text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"), });
const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
let __VLS_16 = { 'click': __VLS_pickEvent(__VLS_15['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_13>).onClick) };
__VLS_16 = { click: (__VLS_ctx.downloadZip) };
(__VLS_14.slots!).default;
}
{
const __VLS_17 = __VLS_intrinsicElements["button"];
const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
const __VLS_19 = __VLS_18({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_17, typeof __VLS_19> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19)!;
let __VLS_21!: __VLS_NormalizeEmits<typeof __VLS_20.emit>;
let __VLS_22 = { 'click': __VLS_pickEvent(__VLS_21['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_19>).onClick) };
__VLS_22 = { click: (__VLS_ctx.chooseBackgroundImage) };
(__VLS_20.slots!).default;
}
{
const __VLS_23 = __VLS_intrinsicElements["button"];
const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
const __VLS_25 = __VLS_24({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25)!;
let __VLS_27!: __VLS_NormalizeEmits<typeof __VLS_26.emit>;
let __VLS_28 = { 'click': __VLS_pickEvent(__VLS_27['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_24, typeof __VLS_25>).onClick) };
__VLS_28 = { click: (__VLS_ctx.downloadWithBackground) };
(__VLS_26.slots!).default;
}
if (__VLS_ctx.qrCodes.length > 0) {
{
const __VLS_29 = __VLS_intrinsicElements["div"];
const __VLS_30 = __VLS_elementAsFunctionalComponent(__VLS_29);
const __VLS_31 = __VLS_30({ ...{}, class: ("flex flex-wrap "), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_29, typeof __VLS_31> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-wrap "), });
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
let __VLS_33!: __VLS_NormalizeEmits<typeof __VLS_32.emit>;
for (const [qrCode, index] of __VLS_getVForSourceType((__VLS_ctx.qrCodes)!)) {
{
const __VLS_34 = __VLS_intrinsicElements["div"];
const __VLS_35 = __VLS_elementAsFunctionalComponent(__VLS_34);
const __VLS_36 = __VLS_35({ ...{}, key: ((index)), class: ("box-border bg-red-600 w-25 w-auto doms mx-1 my-1"), style: (({ backgroundImage: __VLS_ctx.url(__VLS_ctx.$, { qrCode__VLS_ctx, : ..backgroundImage }) })), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_34, typeof __VLS_36> & Record<string, unknown>) => void)({ ...{}, key: ((index)), class: ("box-border bg-red-600 w-25 w-auto doms mx-1 my-1"), style: (({ backgroundImage: __VLS_ctx.url(__VLS_ctx.$, { qrCode__VLS_ctx, : ..backgroundImage }) })), });
const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36)!;
let __VLS_38!: __VLS_NormalizeEmits<typeof __VLS_37.emit>;
{
const __VLS_39 = __VLS_intrinsicElements["div"];
const __VLS_40 = __VLS_elementAsFunctionalComponent(__VLS_39);
const __VLS_41 = __VLS_40({ ...{ onMousedown: {} as any, onMouseup: {} as any, onWheel: {} as any, }, class: ("qr-code"), style: (({ left: qrCode.position.x + 'px', top: qrCode.position.y + 'px', transform: __VLS_ctx.scale(__VLS_ctx.$, { qrCode__VLS_ctx, : ..scale || 1 }) })), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_39, typeof __VLS_41> & Record<string, unknown>) => void)({ ...{ onMousedown: {} as any, onMouseup: {} as any, onWheel: {} as any, }, class: ("qr-code"), style: (({ left: qrCode.position.x + 'px', top: qrCode.position.y + 'px', transform: __VLS_ctx.scale(__VLS_ctx.$, { qrCode__VLS_ctx, : ..scale || 1 }) })), });
const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41)!;
let __VLS_43!: __VLS_NormalizeEmits<typeof __VLS_42.emit>;
let __VLS_44 = { 'mousedown': __VLS_pickEvent(__VLS_43['mousedown'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_41>).onMousedown) };
__VLS_44 = {
mousedown: $event => {
if (!((__VLS_ctx.qrCodes.length > 0))) return;
__VLS_ctx.handleMouseDown($event, index);
// @ts-ignore
[handleFileUpload, downloadZip, chooseBackgroundImage, downloadWithBackground, qrCodes, qrCodes, url, $, , url, $, , scale, $, , scale, $, , handleMouseDown,];
}
};
let __VLS_45 = { 'mouseup': __VLS_pickEvent(__VLS_43['mouseup'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_41>).onMouseup) };
__VLS_45 = {
mouseup: $event => {
if (!((__VLS_ctx.qrCodes.length > 0))) return;
__VLS_ctx.handleMouseUp($event, index);
// @ts-ignore
[handleMouseUp,];
}
};
let __VLS_46 = { 'wheel': __VLS_pickEvent(__VLS_43['wheel'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_41>).onWheel) };
__VLS_46 = {
wheel: $event => {
if (!((__VLS_ctx.qrCodes.length > 0))) return;
__VLS_ctx.handleMouseScroll($event, index);
// @ts-ignore
[handleMouseScroll,];
}
};
{
const __VLS_47 = __VLS_intrinsicElements["img"];
const __VLS_48 = __VLS_elementAsFunctionalComponent(__VLS_47);
const __VLS_49 = __VLS_48({ ...{}, src: ((qrCode.qrDataURL)), alt: ("QR Code"), class: ("qr-image w-20"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_49> & Record<string, unknown>) => void)({ ...{}, src: ((qrCode.qrDataURL)), alt: ("QR Code"), class: ("qr-image w-20"), });
const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49)!;
let __VLS_51!: __VLS_NormalizeEmits<typeof __VLS_50.emit>;
}
(__VLS_42.slots!).default;
}
(__VLS_37.slots!).default;
}
}
(__VLS_32.slots!).default;
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
