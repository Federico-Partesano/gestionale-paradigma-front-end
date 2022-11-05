export declare type End = "first" | "last";
export declare type Column = number | true | "auto";
export declare type Order = number | End;
export declare type Offset = number;
export declare type Align = "start" | "end" | "center" | "baseline" | "stretch";
export declare type AlignSelf = Align | "auto";
export declare type ColProps = {
    noGutter?: boolean;
    col?: Column;
    auto?: boolean;
    alignSelf?: AlignSelf;
    offset?: Offset;
    order?: Order;
    xs?: Column;
    xsOffset?: Offset;
    xsAuto?: boolean;
    xsAlignSelf?: AlignSelf;
    xsOrder?: Order;
    hiddenXsUp?: boolean;
    hiddenXsDown?: boolean;
    sm?: Column;
    smOffset?: Offset;
    smAuto?: boolean;
    smAlignSelf?: AlignSelf;
    smOrder?: Order;
    hiddenSmUp?: boolean;
    hiddenSmDown?: boolean;
    md?: Column;
    mdOffset?: Offset;
    mdAuto?: boolean;
    mdAlignSelf?: AlignSelf;
    mdOrder?: Order;
    hiddenMdUp?: boolean;
    hiddenMdDown?: boolean;
    lg?: Column;
    lgOffset?: Offset;
    lgAuto?: boolean;
    lgAlignSelf?: AlignSelf;
    lgOrder?: Order;
    hiddenLgUp?: boolean;
    hiddenLgDown?: boolean;
    xl?: Column;
    xlOffset?: Offset;
    xlAuto?: boolean;
    xlAlignSelf?: AlignSelf;
    xlOrder?: Order;
    xxl?: Column;
    xxlOffset?: Offset;
    xxlAuto?: boolean;
    xxlAlignSelf?: AlignSelf;
    xxlOrder?: Order;
    hiddenXlUp?: boolean;
    hiddenXlDown?: boolean;
};
export declare type ColCss = {
    col: any;
    offset: any;
    order: any;
    alignSelf: {
        [K in AlignSelf]: string;
    };
    display: {
        none: string;
    };
    noGutter: string;
};
export declare type Justify = "start" | "end" | "center" | "between" | "around";
export declare type RowProps = {
    alignItems?: Align;
    smAlignItems?: Align;
    mdAlignItems?: Align;
    lgAlignItems?: Align;
    xlAlignItems?: Align;
    justifyContent?: Justify;
    smJustifyContent?: Justify;
    mdJustifyContent?: Justify;
    lgJustifyContent?: Justify;
    xlJustifyContent?: Justify;
};
export declare type RowCss = {
    alignItems: {
        [K in Align]: string;
    };
    justifyContent: {
        [K in Justify]: string;
    };
};
