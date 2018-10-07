package controller;

import domain.PersonService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public abstract class SynchroonRequestHandler implements RequestHandler{
    private PersonService personService;

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
