package ua.com.pet.service;

import ua.com.pet.model.User;

import java.util.List;

public interface UserService {

    void saveUser(User user);

    List<User> getUsers();

    User getUser(Long id);

}
