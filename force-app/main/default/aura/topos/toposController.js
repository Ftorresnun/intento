({
    comparar : function(component, event, helper) {
        //obtener el numero aleatorio del play
        var topo = event.getParm("topo");
        // obtengo los topos
        var topos = component.find("topo").getElement();
        var contador1 = 0;
        // recorrer los topos y si el numero coincide se cambia el color del background
        for(var i = 0; i < topos.getElementByTagName("tr").length; i++){
            for(var j = 0; i < topos.getElementByTagName("tr")[i].getElementByTagName("td").length; j++){
                // si el numero coincide se cambia el color
                if(topos.getElementByTagName("tr")[i].getElementByTagName("td")[j].getElementById("topo").value == topo){
                    topos.getElementByTagName("tr")[i].getElementByTagName("td")[j].getElementById("topo").style.backgroundColor = "red";
                    contador1++;
                }
            }
        }

    }
})
