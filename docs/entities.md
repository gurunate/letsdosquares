```mermaid
classDiagram
    Game <|-- SportingEvent
    class Game{
      String title
    }
    class SportingEvent{
      Date date
    }
```