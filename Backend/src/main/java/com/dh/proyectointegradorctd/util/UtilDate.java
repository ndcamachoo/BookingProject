package com.dh.proyectointegradorctd.util;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.time.temporal.ChronoUnit;

public class UtilDate {

    /* =================== Atributos ==================== */

    private static UtilDate instance;

    /* =================== Getters y Setters ===================== */

    public static UtilDate getInstance() {

        if(instance == null){
            instance = new UtilDate();
        }
        return instance;
    }

    /* =================== Métodos =========================*/

    public Integer periodBetweenTwoDates(LocalDate fecha1, LocalDate fecha2){
        return Math.toIntExact(ChronoUnit.DAYS.between(fecha1, fecha2));
    }

    public  List<LocalDate> dateSpace(LocalDate startDate, LocalDate endDate){

        List<LocalDate> dates = new ArrayList<>();
        int diffDate = periodBetweenTwoDates(startDate, endDate);

        for(int i=0; i< diffDate; i++ ){
            LocalDate plusDay = startDate.plusDays(i);
            dates.add(plusDay);
        }

        dates.add(endDate);

        return dates;

    }

}
