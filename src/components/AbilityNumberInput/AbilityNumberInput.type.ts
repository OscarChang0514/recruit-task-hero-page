export interface AbilityNumberInputProps {
  title?: string;
  value?: number;
  /**
   * value的最小限制，同時作為progress的百分比參考
   */
  min?: number;
  /**
   * value的最大限制，同時作為progress的百分比參考
   */
  max?: number;
  /**
   * 當min與max都有傳入值時，會自動秀出進度條(Mobile模式不會)，
   * 也可以使用`progress={false}`隱藏
   */
  progress?: boolean;
  onChange?: (value: number) => void;
}
