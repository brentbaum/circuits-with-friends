/*
 * Everything related to selecting components.
 * All methods belong to WorkspaceCtrl
 */


function highlightSelected() {
    if(d3.select(".selected")) {
        var s = d3.select(".selected");

        workspace.append("rect").attr("x", s.attr("x"))
            .attr("y", s.attr("y"))
            .attr("width", s.attr("width"))
            .attr("height", s.attr("height"))
            .classed("selected", true);

        /*workspace.append("rect")
            .attr("x", s.attr("x") + parseInt(s.style("width"), 10)-5)
            .attr("y", 0)
            .attr("height", 5)
            .attr('width', 5)
            .classed("delete-button", true)*/ch
    }
}
