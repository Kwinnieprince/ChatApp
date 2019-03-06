package controller;

import domain.Todo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddTodo extends AsynchroonRequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String naam = request.getParameter("naam");
        String topic = request.getParameter("topic");
        String dag = request.getParameter("dag");

        Todo todo = new Todo(dag,topic,naam);
        getPersonService().todos.add(todo);

        return null;
    }
}
