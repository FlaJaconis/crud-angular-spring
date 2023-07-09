package com.flavia;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.flavia.controller.model.Curso;
import com.flavia.repository.CursoRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	/**
	 * @param cursoRepository
	 * @return
	 *         método criado apenas para fins de testes iniciais, já que o
	 *         repositório ainda não existe
	 */
	@Bean
	CommandLineRunner initDatabase(CursoRepository cursoRepository) {

		return args -> {
			cursoRepository.deleteAll();// para limpar a base todas as vezes que abrir

			Curso c = new Curso();
			c.setNome("Angular com Spring");
			c.setCategoria("front-end");

			cursoRepository.save(c);

		};
	}

}
