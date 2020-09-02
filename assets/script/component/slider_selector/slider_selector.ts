import card from "../card/card";

const {ccclass, property} = cc._decorator;

/**滑动选择器*/
@ccclass
export default class slider_selector extends cc.Component {
    /* ***************priavte*************** */
    /**触控开启坐标 */
    private _start_pos_o: cc.Vec2;
    /**选择开始下标 */
    private _select_start_n: number;
    /**选择结束下标 */
    private _select_end_n: number;
    /**牌移动距离 */
    private _card_move_n: number;
    /* ***************组件*************** */
    /* -------------------------------delimiter------------------------------- */
    /* ***************引擎回调*************** */
    onLoad () {
        this._card_move_n = this.node.height - this.node.children[0].height;
        this.node.on(cc.Node.EventType.TOUCH_START, this._touch_start, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touch_move, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touch_end, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touch_cancel, this);
    }
    /* ***************功能函数*************** */
    /**检测点击节点 */
    private _check_touch_node(pos_o_: cc.Vec2): number {
        if (this.node.layout.horizontalDirection == cc.Layout.HorizontalDirection.LEFT_TO_RIGHT) {
            let temp1_n = Math.abs(this.node.layout.spacingX);
            let temp2_n = this.node.children[0].width + this.node.layout.spacingX;
            let temp3_n = 0;
            for (let i = this.node.children.length - 1; i >= 0; --i) {
                temp1_n += temp2_n;
                // 判断是否在节点范围内
                if (pos_o_.x > (this.node.width * 0.5 - temp1_n) 
                && pos_o_.x < (this.node.width * 0.5 - temp3_n)
                && pos_o_.y > this.node.children[i].y - this.node.children[i].height * 0.5 && pos_o_.y < this.node.children[i].y + this.node.children[i].height * 0.5) {
                    // cc.log("在 " + this.node.children[i].name + " 节点范围内");
                    return i;
                }
                temp3_n += temp3_n ? temp2_n : temp1_n;
            }
            // 不在节点范围内, 返回上次的选中节点下标
            return this._select_start_n ? this._select_end_n : null;
        }
    }
    /**清空选中节点 */
    private _clear_selected(): void {
        this.node.children.forEach(node_o=> {
            node_o.getComponent(card).selected_b = false;
        });
    }
    /**更新牌状态 */
    private _update_card(): void {
        let temp_o: card;
        this.node.children.forEach(node_o=> {
            temp_o = node_o.getComponent(card);
            if (temp_o.selected_b) {
                temp_o.rise_b = !temp_o.rise_b;
                node_o.y += temp_o.rise_b ? this._card_move_n : -this._card_move_n;
            }
        });
    }
    /* ***************系统事件*************** */
    /**触控开始 */
    private _touch_start(event_o_: cc.Touch): void {
        this._start_pos_o = this.node.convertToNodeSpaceAR(event_o_.getLocation());
        // cc.log("开始坐标: " + this.node.convertToNodeSpaceAR(event_o_.getLocation()));
        this._select_start_n = this._check_touch_node(this._start_pos_o);
        if (this._select_start_n === null) {
            return;
        }
        // 选中首次点击牌
        for (let i = 0; i < this.node.children.length; ++i) {
            if (i == this._select_start_n) {
                this.node.children[i].getComponent(card).selected_b = true;
                break;
            }
        }
    }
    /**触控移动 */
    private _touch_move(event_o_: cc.Touch): void {
        if (this._select_start_n === null) {
            return;
        }
        let local_pos_o = this.node.convertToNodeSpaceAR(event_o_.getLocation());
        if (local_pos_o.x > -this.node.width * 0.5
            && local_pos_o.x < this.node.width * 0.5
            && local_pos_o.y > this.node.y && local_pos_o.y < this.node.height) {
            this._select_end_n = this._check_touch_node(local_pos_o);
            // 将 this._select_start_n - this._select_end_n 范围内节点设置为选中
            let mini_n: number;
            let max_n: number;
            if (this._select_start_n > this._select_end_n) {
                mini_n = this._select_end_n;
                max_n = this._select_start_n;
            } else {
                mini_n = this._select_start_n;
                max_n = this._select_end_n;
            }
            for (let i = 0; i < this.node.children.length; ++i) {
                this.node.children[i].getComponent(card).selected_b = i >= mini_n && i <= max_n;
            }
        }
    }
    /**触控结束 */
    private _touch_end(event_o_: cc.Touch): void {
        // cc.log("结束坐标: " + event_o_.getLocation());
        this._update_card();
        this._clear_selected();
        this._select_start_n = null;
    }
    /**触控返回 */
    private _touch_cancel(event_o_: cc.Touch): void {
        // cc.log("返回坐标: " + event_o_.getLocation());
        this._update_card();
        this._clear_selected();
        this._select_start_n = null;
    }
}