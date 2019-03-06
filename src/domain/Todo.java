package domain;

public class Todo {
    private String dag;
    private String topic;
    private String naam;

    public Todo(String dag, String topic, String naam){
        setDag(dag);
        setTopic(topic);
        setNaam(naam);
    }

    public String getDag() {
        return dag;
    }

    public void setDag(String dag) {
        this.dag = dag;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }
}
