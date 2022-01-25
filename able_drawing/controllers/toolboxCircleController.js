class ToolboxCircleController extends ToolboxShapeController {
    constructor(mouseController, view, model) {
        super(mouseController, view, model);
    }

    get shapeName() { return "circle"; }

    createElementAt(x, y) {
        var group = Helpers.createElement("g", {}, false);
        var el = Helpers.createElement('circle', { cx: x, cy: y, r:57, fill: "transparent", stroke: "black", "stroke-width": 11 });
        group.appendChild(el);
        var model = new CircleModel();
        model._cx = x;
        model._cy = y;
        model._r = 57;
        var view = new ShapeView(group, model);
        var controller = new CircleController(this.mouseController, view, model);

        return { el: group, model: model, view: view, controller: controller };
    }
}
