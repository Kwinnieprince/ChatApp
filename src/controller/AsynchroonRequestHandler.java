package controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.PersonService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public abstract class AsynchroonRequestHandler implements RequestHandler{
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

    public String toJson(List list) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(list);
    }
}
