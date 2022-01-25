class ToolboxRectangleController extends ToolboxShapeController {
    constructor(mouseController, view, model) {
        super(mouseController, view, model);
    }

    get shapeName() { return "rectangle"; }

    createElementAt(x, y) {
        var group = Helpers.createElement("g", {}, false);
        var el = Helpers.createElement('rect', { x: x - 30, y: y - 30, width: 81, height: 201, fill: "#000000", stroke: "black", "stroke-width": 0 });
        group.appendChild(el);
        var model = new RectangleModel();
        model._x = x - 30;
        model._y = y - 30;
        model._width = 81;
        model._height = 201;
        var view = new ShapeView(group, model);
        var controller = new RectangleController(this.mouseController, view, model);

        return { el: group, model: model, view: view, controller: controller };
    }
}
