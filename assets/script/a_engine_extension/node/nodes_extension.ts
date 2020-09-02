/**nodes扩展组件 
 * - 读/写所有组件: node.label/mask/layout...
 * - 获取子节点: node.child("XXX").child("XXX")...;
 * - 设置自动更新子节点缓存状态: node.child_update_b = true/false;
*/
if (!CC_EDITOR) {
    const component_ss = {
        dragon_bones: dragonBones.ArmatureDisplay,
        graphics: cc.Graphics,
        label: cc.Label,
        label_outline: cc.LabelOutline,
        label_shadow: cc.LabelShadow,
        light: cc.Light,
        mask: cc.Mask,
        particle_system: cc.ParticleSystem,
        particle_system_3d: cc.ParticleSystem3D,
        rich_text: cc.RichText,
        sp_skeleton: sp.Skeleton,
        sprite: cc.Sprite,
        tiled_map: cc.TiledMap,
        tiled_tile: cc.TiledTile,
        mesh_renderer: cc.MeshRenderer,
        skinned_mesh_renderer: cc.SkinnedMeshRenderer,
        block_input_events: cc.BlockInputEvents,
        button: cc.Button,
        canvas: cc.Canvas,
        edit_box: cc.EditBox,
        layout: cc.Layout,
        page_view: cc.PageView,
        page_view_indicator: cc.PageViewIndicator,
        progress_bar: cc.ProgressBar,
        scroll_bar: cc.Scrollbar,
        scroll_view: cc.ScrollView,
        slider: cc.Slider,
        toggle: cc.Toggle,
        toggle_container: cc.ToggleContainer,
        toggle_group: cc.ToggleGroup,
        video_player: cc.VideoPlayer,
        web_view: cc.WebView,
        widget: cc.Widget,
        box_collider: cc.BoxCollider,
        circle_collider: cc.CircleCollider,
        polygon_collider: cc.PolygonCollider,
        physics_box_collider: cc.PhysicsBoxCollider,
        box_collider_3d: cc.BoxCollider3D,
        physics_chain_collider: cc.PhysicsChainCollider,
        physics_circle_collider: cc.PhysicsCircleCollider,
        physics_polygon_collider: cc.PhysicsPolygonCollider,
        sphere_collider_3d: cc.SphereCollider3D,
        constant_force: cc.ConstantForce,
        distance_joint: cc.DistanceJoint,
        motor_joint: cc.MotorJoint,
        mouse_joint: cc.MouseJoint,
        prismatic_joint: cc.PrismaticJoint,
        revolute_joint: cc.RevoluteJoint,
        rope_joint: cc.RopeJoint,
        weld_joint: cc.WeldJoint,
        wheel_joint: cc.WheelJoint,
        rigid_body: cc.RigidBody,
        rigid_body_3d: cc.RigidBody3D,
        animation: cc.Animation,
        audio_source: cc.AudioSource,
        camera: cc.Camera,
        motion_streak: cc.MotionStreak,
        skeleton_animation: cc.SkeletonAnimation,
        swan_sub_context_view: cc.SwanSubContextView,
        wx_sub_context_view: cc.WXSubContextView,
    };
    /* ***************准备参数*************** */
    let temp1_o: any;
    // nodes数据模块
    Object.defineProperty(cc.Node.prototype, "__nodes_a", {
        get: function() {
            if (!this.__nodes_cache_a) {
                this.__nodes_cache_a = {
                    init_b: false,
                    component_o: new Map,
                    child_o: new Map,
                    child_update_b: false,
                };
            }
            return this.__nodes_cache_a;
        },
        configurable: true,
    });
    // 重载组件读/写
    for (let k_s in component_ss) {
        Object.defineProperty(cc.Node.prototype, k_s, {
            get: function() {
                temp1_o = this.__nodes_a.component_o.get(k_s);
                if (!temp1_o) {
                    temp1_o = this.getComponent(component_ss[k_s]);
                    this.__nodes_a.component_o.set(k_s, temp1_o);
                }
                return temp1_o;
            },
            set: function() {
                this.__nodes_a.component_o.delete(k_s);
            },
            configurable: true,
        });
    }
    // 重载子节点获取
    cc.Node.prototype.child = function(v_s_: string, update_b_?: boolean): cc.Node {
        // 实时更新子节点
        if (update_b_) {
            this.__nodes_a.child_o.delete(v_s_);
            temp1_o = this.getChildByName(v_s_);
            this.__nodes_a.child_o.set(v_s_, temp1_o);
        } else {
            temp1_o = this.__nodes_a.child_o.get(v_s_);
            if (!temp1_o) {
                temp1_o = this.getChildByName(v_s_);
                this.__nodes_a.child_o.set(v_s_, temp1_o);
            }
        }
        return temp1_o;
    }
    // 重载子节点自动更新
    Object.defineProperty(cc.Node.prototype, "child_update_b", {
        get: function() {
            return this.__nodes_a.child_update_b;
        },
        set: function() {
            if (this.__nodes_a.child_update_b) {
                this.__nodes_a.child_update_b = false;
                this.off(cc.Node.EventType.CHILD_REMOVED, (node_o: cc.Node)=> this.__nodes_a.child_o.delete(node_o.name), this);
            }
            this.on(cc.Node.EventType.CHILD_REMOVED, (node_o: cc.Node)=> this.__nodes_a.child_o.delete(node_o.name), this);
        },
        configurable: true,
    });
}