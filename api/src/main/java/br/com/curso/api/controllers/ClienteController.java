package br.com.curso.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {

  @GetMapping("/")
  public String teste() {
    return "Hello World!";
  }
}
