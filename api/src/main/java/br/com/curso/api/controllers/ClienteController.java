package br.com.curso.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.curso.api.models.Cliente;
import br.com.curso.api.repositories.ClienteRepository;

@RestController
public class ClienteController {

  @Autowired
  private ClienteRepository repository;

  @PostMapping("/")
  public Cliente cadastrar(@RequestBody Cliente cliente) {
    return repository.save(cliente);
  }

  @GetMapping("/")
  public List<Cliente> selecionar() {
    return repository.findAll();
  }
}
