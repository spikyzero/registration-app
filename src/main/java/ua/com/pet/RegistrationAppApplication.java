package ua.com.pet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.com.pet.model.User;

import java.util.List;

@SpringBootApplication
public class RegistrationAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(RegistrationAppApplication.class, args);
    }

}
