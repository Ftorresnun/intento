({
    play : function(component, event, helper) {
        var action = component.get("c.randomNum");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var topo = response.getReturnValue();
                component.find("topo").getElement().value = topo;
                var appEvent = $A.get("e.c:topoEvent");
                appEvent.setParams({"topo":topo});
                appEvent.fire();
            }
        });
        $A.enqueueAction(action);
    }
})
