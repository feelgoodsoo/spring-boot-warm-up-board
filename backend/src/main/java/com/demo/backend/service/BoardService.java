package com.demo.backend.service;

import java.time.*;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.backend.entitiy.Board;
import com.demo.backend.repository.BoardRepository;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public void write(Board board) {
        ZoneId zoneId = ZoneId.of("Asia/Seoul");
        ZonedDateTime zoneDateTime = ZonedDateTime.now(zoneId);
        board.setCreated_at(zoneDateTime);
        // System.out.println("current Board info: " + board);
        boardRepository.save(board);
    }

    public List<Board> list() {
        return boardRepository.findAll();
    }

    public void delete(Integer id) {
        boardRepository.deleteById(id);
    }

    public List<Board> boardSearchList(String keyword) {
        return boardRepository.findByTitleContaining(keyword);
    }

    public Optional<Board> getBoardOne(Integer id) {
        return boardRepository.findById(id);
    }
}
