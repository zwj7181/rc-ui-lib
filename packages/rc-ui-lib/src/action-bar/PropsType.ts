import React from 'react';
import { BadgeSettingProps } from '../badge/PropsType';
import { ButtonType } from '../button/PropsType';
import { BaseTypeProps } from '../utils';

export interface ActionBarProps extends BaseTypeProps {
  /** 是否开启底部安全区适配	 */
  safeAreaInsetBottom?: boolean;
}

export interface ActionBarIconProps extends BaseTypeProps {
  /** 按钮文字	 */
  text?: React.ReactNode;
  /** 图标 */
  icon?: string | React.ReactNode;
  /** 图标颜色 */
  color?: string;
  /** 图标额外类名	 */
  iconClass?: string;
  /** 图标类名前缀，等同于 Icon 组件的 class-prefix 属性	 */
  iconPrefix?: string;
  /** 图标右上角徽标的内容	 */
  badge?: BadgeSettingProps;
  /** 触发点击 */
  onClick?: (event: React.MouseEvent) => void;
}

export interface ActionBarButtonProps extends BaseTypeProps {
  /** 按钮文字 */
  text?: React.ReactNode;
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮图标 */
  icon?: string | React.ReactNode;
  /** 按钮颜色，支持传入 linear-gradient 渐变色	 */
  color?: string;
  /** 是否禁用按钮	 */
  disabled?: boolean;
  /** 是否显示为加载状态	 */
  loading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  /**  @private */
  index?: number;
}
