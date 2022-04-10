export interface AbilityNumberInputProps {
  title?: string;
  value?: number;
  min?: number;
  max?: number;
  /**
   * 當min與max都有傳入值時，會自動秀出進度條(Mobile模式不會)
   * 也可以使用`progress={false}`隱藏
   */
  progress?: boolean;
  onChange?: (value: number) => void;
}
