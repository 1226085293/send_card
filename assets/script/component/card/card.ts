const {ccclass, property} = cc._decorator;

/**@ 牌
 */
@ccclass
export default class card extends cc.Component {
    /* ***************private*************** */
    /**选中状态 */
    private _selected_b: boolean = false;
    /* ***************public*************** */
    /**上升状态 */
    public rise_b: boolean = false;
    /* -------------------------------delimiter------------------------------- */
    /* ***************功能函数*************** */
    /**获取选中状态 */
    get selected_b(): boolean {
        return this._selected_b;
    }
    /**设置选中状态 */
    set selected_b(v_b_: boolean) {
        if (this._selected_b == v_b_) {
            return;
        }
        this._selected_b = v_b_;
        this.node.color = this._selected_b ? cc.Color.GRAY : cc.Color.WHITE;
    }
}
