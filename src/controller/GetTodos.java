package controller;

import domain.Todo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class GetTodos extends AsynchroonRequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<Todo> todos = getPersonService().todos;
        String result = this.toJson(todos);
        response.getWriter().write(result);
        return null;
    }
}
