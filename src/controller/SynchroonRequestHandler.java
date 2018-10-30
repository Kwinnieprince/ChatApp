package controller;

import domain.Person;
import domain.PersonService;
import domain.Role;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public abstract class SynchroonRequestHandler implements RequestHandler{
    private PersonService personService;

    protected boolean isFromUserWithRole(HttpServletRequest request, Role role) {
        Person person = (Person) request.getSession().getAttribute("user");
        if (person != null && person.getRole().equals(role)) {
            return true;
        }
        return false;
    }


    @Override
    public abstract String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException;

    @Override
    public void setModel(PersonService personService) {
        this.personService = personService;
    }

    @Override
    public PersonService getPersonService() {
        return this.personService;
    }
}
