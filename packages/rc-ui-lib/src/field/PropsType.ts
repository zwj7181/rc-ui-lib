import { BaseTypeProps } from '../utils';
import { CellProps } from '../cell/PropsType';
import { DialogProps } from '../dialog/PropsType';

export type FieldType = 'tel' | 'text' | 'digit' | 'number' | 'search' | 'password' | 'textarea';

export type FieldTextAlign = 'left' | 'center' | 'right';

export type FieldClearTrigger = 'always' | 'focus';

export type FieldFormatTrigger = 'onBlur' | 'onChange';

export type FieldValidateTrigger = 'onBlur' | 'onChange' | 'onSubmit';

export type FieldAutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

export type FieldValidateError = {
  name?: string;
  message: string;
};

export type FieldTooltipProps = Omit<DialogProps, 'visible'> & { icon?: React.ReactNode };

export type FieldRule = {
  pattern?: RegExp;
  trigger?: FieldValidateTrigger;
  message?: string | ((value: any, rule: FieldRule) => string);
  required?: boolean;
  validator?: (value: any, rule: FieldRule) => boolean | string | Promise<boolean | string>;
  formatter?: (value: any, rule: FieldRule) => string;
};

export interface FieldCommonProps {
  /** 输入框占位提示文字	 */
  placeholder?: string;
  /** 输入的最大字符数	 */
  maxlength?: number;
  inputAlign?: FieldTextAlign;
  /** 是否禁用输入框	 */
  disabled?: boolean;
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  // autofocus?: boolean;
  /** 是否为只读状态，只读状态下无法输入内容	 */
  readonly?: boolean;
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean;
  /** 清除图标名称或图片链接	 */
  clearIcon?: string | React.ReactNode;
  /** 是否将输入内容标红	 */
  error?: boolean;
  /** 底部错误提示文案，为空时不展示 */
  errorMessage?: React.ReactNode;
  /** 左侧图标名称或图片链接	 */
  leftIcon?: string | React.ReactNode;
  /** 右侧图标名称或图片链接	 */
  rightIcon?: string | React.ReactNode;
  /** 输入内容格式化函数 */
  formatter?: (val: string | number) => string;
  /**
   * 格式化函数触发的时机
   * @default 'onChange'
   */
  formatTrigger?: FieldFormatTrigger;
  /**
   * 显示清除图标的时机，
   * always 表示输入框不为空时展示 focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: FieldClearTrigger;
  /** 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效。 */
  children?: React.ReactNode;
}

export interface FieldProps extends FieldCommonProps, BaseTypeProps, Partial<CellProps> {
  /** 当前输入的值 */
  value?: string;
  /** 输入框类型 */
  type?: FieldType;
  /** 名称，提交表单的标识符	 */
  name?: string;
  /** 输入框行数 */
  rows?: number;
  /**
   * 是否自适应内容高度，只对 textarea 有效
   * 可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
   */
  autosize?: boolean | FieldAutosizeConfig;
  /** 是否展示右侧箭头并开启点击反馈	  */
  isLink?: boolean;
  /** 左侧文本额外类名	 */
  labelClass?: string;
  /** 左侧文本宽度，默认单位为 px	 */
  labelWidth?: number | string;
  /** 左侧文本对齐方式 */
  labelAlign?: FieldTextAlign;
  /** 是否显示字数统计，需要设置 maxlength 属性 */
  showWordLimit?: boolean;
  /** 是否在 label 后面添加冒号	 */
  colon?: boolean;
  /** 是否开启点击反馈	 */
  clickable?: boolean;
  /** 是否显示表单必填星号	 */
  required?: boolean;
  /** 是否显示内边框	 */
  border?: boolean;
  /** 错误提示文案对齐方式 */
  errorMessageAlign?: FieldTextAlign;
  /** 自定义输入框尾部按钮 */
  button?: React.ReactNode;
  /** 自定义输入框最右侧的额外内容 */
  extra?: React.ReactNode;
  /** 额外的提示信息 */
  intro?: React.ReactNode;
  /** 字段提示信息 */
  tooltip?: React.ReactNode | FieldTooltipProps;
  /** 输入框获得焦点时触发 */
  onChange?: (val: string) => void;
  /** 输入框失去焦点时触发 */
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 点击 Field 时触发 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 输入框获得焦点时触发 */
  onFocus?: (e: React.MouseEvent) => void;
  /** 输入框失去焦点时触发 */
  onBlur?: (e: React.MouseEvent) => void;
  onKeypress?: (e: React.KeyboardEvent) => void;
  /** 点击输入区域时触发 */
  onClickInput?: (e: React.MouseEvent) => void;
  /** 点击左侧图标时触发 */
  onClickLeftIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 	点击右侧图标时触发 */
  onClickRightIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 获取到 Field 实例 */
  getFieldRef?: (ref) => void;
  /** 获取到 input 实例 */
  getInputRef?: (ref) => void;
}

export type FieldInstance = {
  focus: () => void;
  blur: () => void;
};
