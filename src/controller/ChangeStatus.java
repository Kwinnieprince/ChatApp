package controller;

import domain.Person;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

public class ChangeStatus extends AsynchroonRequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Person user = (Person) request.getSession().getAttribute("user");
//        System.out.println(user.getStatus());
        if(user != null){
            String status = request.getParameter("statusText");
            try {
//                System.out.println(status);
                user.setStatus(status);
            }catch (Exception e) {
                System.out.println(e.getMessage());
            }

        }
        return null;
    }

}
