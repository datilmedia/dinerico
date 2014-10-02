package com.dinerico.pos.model;

import com.j256.ormlite.field.DatabaseField;

/**
 * Created by josephleon on 7/31/14.
 */
public class Session {
  @DatabaseField(generatedId = true)
  private Long rowId;
  @DatabaseField
  private String id;
  @DatabaseField
  private String lastUpdated;
  @DatabaseField
  private String created;
  @DatabaseField
  private String object;
  @DatabaseField
  private String url;

  public static Session session;

  public Session(){

  }

  public static Session getInstance() {
    if (session == null)
      session = new Session();
    return session;
  }

  public static void setInstance(Session instance){
    session = instance;
  }

  public static void reset() {
    session = null;
  }

  public Session(String id, String lastUpdated, String created,
                 String object, String url) {
    this.id = id;
    this.lastUpdated = lastUpdated;
    this.created = created;
    this.object = object;
    this.url = url;
  }

  public Long getRowId() {
    return rowId;
  }

  public void setRowId(Long rowId) {
    this.rowId = rowId;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getlastUpdated() {
    return lastUpdated;
  }

  public void setlastUpdated(String lastUpdated) {
    this.lastUpdated = lastUpdated;
  }

  public String getCreated() {
    return created;
  }

  public void setCreated(String created) {
    this.created = created;
  }

  public String getObject() {
    return object;
  }

  public void setObject(String object) {
    this.object = object;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }


  @Override
  public String toString() {
    return "Session{ \n" +
            "rowId='" + rowId +"'\n" +
            "id='" + id + "'\n" +
            "lastUpdated='" + lastUpdated + "'\n" +
            "created='" + created + "'\n" +
            "object='" + object + "'\n" +
            "url='" + url + "'\n" +
            '}';
  }
}
