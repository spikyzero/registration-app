package ua.com.pet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.com.pet.model.User;
import ua.com.pet.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping()
    public List<User> getUsers() {
        User user = new User();
        user.setId(1L);
        user.setName("Nick");
        user.setEmail("nick@gmail.com");
        user.setPassword("pass123");
        return userService.getUsers();
    }

    @GetMapping("/save")
    public List<User> saveUser() {
        User user = new User();
        user.setId(1L);
        user.setName("Nick");
        user.setEmail("nick@gmail.com");
        user.setPassword("pass123");
        userService.saveUser(user);
        User user1 = new User();
        user1.setName("Roman");
        user1.setEmail("roman@gmail.com");
        user1.setPassword("12341");
        userService.saveUser(user1);
        return userService.getUsers();
    }

}
