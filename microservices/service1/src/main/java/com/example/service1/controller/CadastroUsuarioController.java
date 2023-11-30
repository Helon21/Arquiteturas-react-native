package com.example.service1.controller;

import com.example.service1.model.Usuario;
import com.example.service1.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cadastro")
public class CadastroUsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public Usuario cadastrar(Usuario usuario){
        return usuarioService.inserir(usuario);
    }
}
