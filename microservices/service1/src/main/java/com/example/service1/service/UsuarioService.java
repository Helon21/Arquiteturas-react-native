package com.example.service1.service;

import com.example.service1.model.Usuario;
import com.example.service1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario inserir(Usuario usuario){
        Usuario usuarioNovo = usuarioRepository.saveAndFlush(usuario);
        return usuarioNovo;
    }

}
