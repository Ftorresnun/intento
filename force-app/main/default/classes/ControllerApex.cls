public with sharing class ControllerApex{
    @AuraEnabled
    //sacar numeros random del 1 al 5
    public static Integer randomNum(){
        Integer randonNum = Integer.valueOf((1 + Math.random() * 5));
        return randonNum;
    }
    @AuraEnabled
    public static List<Integer> topos(){
        List<Integer> topos = new List<Integer>();
        for(Integer i = 0; i < 5; i++){
            topos.add(i);
        }
        Double random = Math.random();
        Integer longitud = topos.size();
        Integer randomNum = Integer.valueOf((1 + random * 5));
        return topos;
    }
}