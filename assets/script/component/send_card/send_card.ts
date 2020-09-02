const {ccclass, property} = cc._decorator;

module _send_card {
    export enum easing {
        null,
        /**
        !#en Easing in with quadratic formula. From slow to fast.
        !#zh 平方曲线缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        quadIn,	
        /**
        !#en Easing out with quadratic formula. From fast to slow.
        !#zh 平方曲线缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        quadOut,	
        /**
        !#en Easing in and out with quadratic formula. From slow to fast, then back to slow.
        !#zh 平方曲线缓入缓出函数。运动由慢到快再到慢。
        @param t The current time as a percentage of the total time. 
        */
        quadInOut,	
        /**
        !#en Easing in with cubic formula. From slow to fast.
        !#zh 立方曲线缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        cubicIn,	
        /**
        !#en Easing out with cubic formula. From slow to fast.
        !#zh 立方曲线缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        cubicOut,	
        /**
        !#en Easing in and out with cubic formula. From slow to fast, then back to slow.
        !#zh 立方曲线缓入缓出函数。运动由慢到快再到慢。
        @param t The current time as a percentage of the total time. 
        */
        cubicInOut,	
        /**
        !#en Easing in with quartic formula. From slow to fast.
        !#zh 四次方曲线缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        quartIn,	
        /**
        !#en Easing out with quartic formula. From fast to slow.
        !#zh 四次方曲线缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        quartOut,	
        /**
        !#en Easing in and out with quartic formula. From slow to fast, then back to slow.
        !#zh 四次方曲线缓入缓出函数。运动由慢到快再到慢。
        @param t The current time as a percentage of the total time. 
        */
        quartInOut,	
        /**
        !#en Easing in with quintic formula. From slow to fast.
        !#zh 五次方曲线缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        quintIn,	
        /**
        !#en Easing out with quintic formula. From fast to slow.
        !#zh 五次方曲线缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        quintOut,	
        /**
        !#en Easing in and out with quintic formula. From slow to fast, then back to slow.
        !#zh 五次方曲线缓入缓出函数。运动由慢到快再到慢。
        @param t The current time as a percentage of the total time. 
        */
        quintInOut,	
        /**
        !#en Easing in and out with sine formula. From slow to fast.
        !#zh 正弦曲线缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        sineIn,	
        /**
        !#en Easing in and out with sine formula. From fast to slow.
        !#zh 正弦曲线缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        sineOut,	
        /**
        !#en Easing in and out with sine formula. From slow to fast, then back to slow.
        !#zh 正弦曲线缓入缓出函数。运动由慢到快再到慢。
        @param t The current time as a percentage of the total time. 
        */
        sineInOut,	
        /**
        !#en Easing in and out with exponential formula. From slow to fast.
        !#zh 指数曲线缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        expoIn,	
        /**
        !#en Easing in and out with exponential formula. From fast to slow.
        !#zh 指数曲线缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        expoOut,	
        /**
        !#en Easing in and out with exponential formula. From slow to fast.
        !#zh 指数曲线缓入和缓出函数。运动由慢到很快再到慢。
        @param t The current time as a percentage of the total time, then back to slow. 
        */
        expoInOut,	
        /**
        !#en Easing in and out with circular formula. From slow to fast.
        !#zh 循环公式缓入函数。运动由慢到快。
        @param t The current time as a percentage of the total time. 
        */
        circIn,	
        /**
        !#en Easing in and out with circular formula. From fast to slow.
        !#zh 循环公式缓出函数。运动由快到慢。
        @param t The current time as a percentage of the total time. 
        */
        circOut,	
        /**
        !#en Easing in and out with circular formula. From slow to fast.
        !#zh 指数曲线缓入缓出函数。运动由慢到很快再到慢。
        @param t The current time as a percentage of the total time, then back to slow. 
        */
        circInOut,	
        /**
        !#en Easing in action with a spring oscillating effect.
        !#zh 弹簧回震效果的缓入函数。
        @param t The current time as a percentage of the total time. 
        */
        elasticIn,	
        /**
        !#en Easing out action with a spring oscillating effect.
        !#zh 弹簧回震效果的缓出函数。
        @param t The current time as a percentage of the total time. 
        */
        elasticOut,	
        /**
        !#en Easing in and out action with a spring oscillating effect.
        !#zh 弹簧回震效果的缓入缓出函数。
        @param t The current time as a percentage of the total time. 
        */
        elasticInOut,	
        /**
        !#en Easing in action with "back up" behavior.
        !#zh 回退效果的缓入函数。
        @param t The current time as a percentage of the total time. 
        */
        backIn,	
        /**
        !#en Easing out action with "back up" behavior.
        !#zh 回退效果的缓出函数。
        @param t The current time as a percentage of the total time. 
        */
        backOut,	
        /**
        !#en Easing in and out action with "back up" behavior.
        !#zh 回退效果的缓入缓出函数。
        @param t The current time as a percentage of the total time. 
        */
        backInOut,	
        /**
        !#en Easing in action with bouncing effect.
        !#zh 弹跳效果的缓入函数。
        @param t The current time as a percentage of the total time. 
        */
        bounceIn,	
        /**
        !#en Easing out action with bouncing effect.
        !#zh 弹跳效果的缓出函数。
        @param t The current time as a percentage of the total time. 
        */
        bounceOut,	
        /**
        !#en Easing in and out action with bouncing effect.
        !#zh 弹跳效果的缓入缓出函数。
        @param t The current time as a percentage of the total time. 
        */
        bounceInOut,	
        /**
        !#en Target will run action with smooth effect.
        !#zh 平滑效果函数。
        @param t The current time as a percentage of the total time. 
        */
        smooth,	
        /**
        !#en Target will run action with fade effect.
        !#zh 渐褪效果函数。
        @param t The current time as a percentage of the total time. 
        */
        fade,
    }
}

@ccclass
export default class send_card extends cc.Component {
    /* ***************private*************** */
    /* ***************组件*************** */
    @property({ displayName: "发牌点", type: cc.Node })
    send_pos_o: cc.Node = null;
    @property({ displayName: "牌背", type: cc.Prefab })
    card_bg_o: cc.Prefab = null;
    @property({ displayName: "单牌移动时间", type: cc.Float, min: 0 })
    move_time_n = 0.5;
    @property({ displayName: "单牌发牌间隔时间", type: cc.Float, min: 0 })
    single_interval_n = 0.1;
    @property({ displayName: `发牌效果`, type: cc.Enum(_send_card.easing) })
    send_effect_e = _send_card.easing.null;
    @property({ displayName: "旋转圈数", type: cc.Integer })
    rotation_n = 0;
    @property({ displayName: "分段发牌" })
    segmented_b = false;
    @property({ displayName: "单段发牌张数", type: cc.Integer, min: 2, visible() { return this.segmented_b; } })
    send_card_n = 2;
    @property({ displayName: "单段发牌间隔时间", type: cc.Float, min: 0, visible() { return this.segmented_b; } })
    segmented_interval_n = 0.5;
    @property({ displayName: "发牌完成回调", type: cc.Component.EventHandler, tooltip: "args1: 牌节点, args2: 牌背节点, args3?: 清理函数(存在则必须调用)" })
    finsh_event_o: cc.Component.EventHandler = null;
    /* -------------------------------delimiter------------------------------- */
    /* -------------------------------delimiter------------------------------- */
    /**开始动画 */
    public start_anim(): void {
        // ------------------准备参数
        let self = this;
        let k1_n: number, k2_n: number;
        let temp1_os: cc.Node[] = [];
        let temp1_n: number;
        /**牌背起始坐标 */
        let send_pos_o = this.node.convertToNodeSpaceAR(this.send_pos_o.parent.convertToWorldSpaceAR(this.send_pos_o.position));
        /**原有牌数量 */
        let old_len_n = this.node.childrenCount;
        /**每段发牌数量 */
        let send_card_ns: number[] = [];
        // 计算每段发牌数量
        if (this.segmented_b) {
            for (k1_n = 0; k1_n < Math.floor(old_len_n / this.send_card_n); ++k1_n) {
                send_card_ns.push(this.send_card_n);
            }
            if (this.send_card_n * send_card_ns.length < old_len_n) {
                send_card_ns[send_card_ns.length - 1] += old_len_n - this.send_card_n * send_card_ns.length;
            }
        } else {
            send_card_ns.push(old_len_n);
        }
        // ------------------初始化视图
        this.node.layout.updateLayout();
        this.node.layout.enabled = false;
        // 加载牌背
        for (k1_n = 0; k1_n < old_len_n; ++k1_n) {
            temp1_os.push(cc.instantiate(this.card_bg_o));
            temp1_os[k1_n].setPosition(send_pos_o);
            temp1_os[k1_n].active = false;
            this.node.addChild(temp1_os[k1_n]);
            this.node.children[k1_n].active = false;
        }
        // 展示一张牌背
        temp1_os[old_len_n - 1].active = true;
        // ------------------编写动画
        for (k1_n = 0; k1_n < send_card_ns.length; ++k1_n) {
            temp1_n = 0;
            for (k2_n = 0; k2_n < k1_n; temp1_n += send_card_ns[k2_n++]);
            for (k2_n = temp1_n; k2_n < temp1_n + send_card_ns[k1_n]; ++k2_n) {
                let temp1_o = temp1_os[k2_n];
                let temp2_o = this.node.children[k2_n];
                let rotation_n = this.rotation_n * 360 + Math.abs(temp1_o.rotation - temp2_o.rotation);
                // cc.log(k1_n, k2_n);
                let anim_o = (<cc.Tween>cc.tween(temp1_o))
                .delay(k1_n * this.segmented_interval_n + k2_n * this.single_interval_n)
                .call(()=> temp1_o.active = true);
                // 发牌效果
                if (this.send_effect_e != _send_card.easing.null) {
                    anim_o.then(
                        cc.tween().to(this.move_time_n, { position: { value: temp2_o.position, easing: _send_card.easing[this.send_effect_e] }, rotation: rotation_n })
                    );
                } else {
                    anim_o.then(
                        cc.tween().to(this.move_time_n, { position: temp2_o.position, rotation: rotation_n })
                    );
                }
                // 发牌结束重启布局
                if (k2_n == old_len_n - 1) {
                    anim_o.then(
                        cc.tween().call(()=> {
                            // self.finsh_event_o.emit([temp2_o, temp1_o, ()=> {
                            //     temp1_os.forEach(node_o=> {
                            //         node_o.removeFromParent();
                            //         node_o.destroy();
                            //     });
                            //     self.node.layout.enabled = true;
                            // }]);
                            temp1_os.forEach(node_o=> {
                                node_o.removeFromParent();
                                node_o.destroy();
                            });
                            temp2_o.active = true;
                            self.node.layout.enabled = true;
                        })
                    )
                } else {
                    anim_o.then(
                        cc.tween().call(()=> {
                            // self.finsh_event_o.emit([temp2_o, temp1_o]);
                            temp1_o.active = false;
                            temp2_o.active = true;
                        })
                    );
                }
                // 开始发牌
                anim_o.start();
            }
        }
    }
}
