package com.demo.backend.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.backend.entitiy.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {

    List<Board> findByTitleContaining(String keyword);
}
