import React, {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from 'react';
import styles from './style/TextBox.module.css';
import clsx from 'clsx';

type TextboxProps = HTMLAttributes<HTMLInputElement> &
  Partial<{
    size: 'small' | 'medium' | 'large';
    invalid: boolean;
    addonLeft: JSX.Element | string;
    addonRight: JSX.Element | string;
    iconLeft: JSX.Element | string;
    iconRight: JSX.Element | string;
    disabled?: boolean;
    onClickLeftIcon?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickRightIcon?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickLeftAddon?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickRightAddon?: (event: React.MouseEvent<HTMLElement>) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
  }>;

const InternalTextBox: ForwardRefRenderFunction<
  HTMLInputElement,
  TextboxProps
> = (
  {
    size = 'medium',
    invalid,
    iconLeft,
    iconRight,
    addonLeft,
    addonRight,
    disabled,
    onClickLeftIcon,
    onClickRightIcon,
    onClickLeftAddon,
    onClickRightAddon,
    value,
    onChange,
    readOnly,
    inputProps,
    ...props
  },
  ref,
) => {
  return (
    <div
      className={clsx(styles.input, styles[size], {
        [styles.invalid]: invalid,
        [styles.disabled]: disabled,
      })}
    >
      {addonLeft && (
        <div
          className={clsx(
            styles.addonBefore,
            styles.addon,
            onClickLeftAddon && styles.pointer,
          )}
          onClick={onClickLeftAddon}
        >
          {addonLeft}
        </div>
      )}
      {iconLeft && (
        <div
          className={clsx(styles.iconBefore, onClickLeftIcon && styles.pointer)}
          onClick={onClickLeftIcon}
        >
          {iconLeft}
        </div>
      )}
      <input
        {...props}
        {...inputProps}
        type="text"
        ref={ref}
        disabled={disabled}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {iconRight && (
        <div
          className={clsx(styles.iconAfter, onClickRightIcon && styles.pointer)}
          onClick={onClickRightIcon}
        >
          {iconRight}
        </div>
      )}
      {addonRight && (
        <div
          className={clsx(styles.addonAfter, styles.addon)}
          onClick={onClickRightAddon}
        >
          {addonRight}
        </div>
      )}
    </div>
  );
};

const Textbox = forwardRef(InternalTextBox);

export default Textbox;
