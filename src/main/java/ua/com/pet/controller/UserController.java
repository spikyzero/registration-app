package ua.com.pet.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ua.com.pet.model.User;
import ua.com.pet.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private static final String INCOMPLETE = "Incomplete user data";
    private static final String SAVED = "User saved";

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping()
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping("/save")
    public ResponseEntity<Object> saveUser(@RequestBody User user) {
        if (user == null || StringUtils.isAnyEmpty(user.getEmail(), user.getName(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(INCOMPLETE);
        }
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(SAVED);
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/exists/email")
    public boolean existsByEmail(@RequestParam String email) {
        return userService.existsByEmail(email);
    }

}
