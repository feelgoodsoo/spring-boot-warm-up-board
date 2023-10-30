package com.demo.backend.controller;

import com.demo.backend.entitiy.*;
import com.demo.backend.service.BoardService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class BoardController {

    @Autowired
    private BoardService boardService;

    @ResponseBody
    @GetMapping("/board/test") // localhost:5050/board/test
    public String boadrWirteForm() {

        return "hello user";
    }

    @ResponseBody
    @PostMapping("/board/write")
    public String boardWrite(@RequestBody Board board) {

        System.out.println("input value: " + board);
        boardService.write(board);

        return "write url";
    }

    @GetMapping("/board/list")
    public List<Board> boardList() {

        List<Board> boardList = boardService.list();
        System.out.println("boardList info: " + boardList);
        return boardList;
    }

    @GetMapping("/board/{id}")
    public Optional<Board> getBoardOne(@PathVariable Integer id) {
        return boardService.getBoardOne(id);
    }

    @PostMapping("/board/delete")
    public String boardDelete(Integer id) {

        System.out.println("requested Id: " + id);
        boardService.delete(id);
        return "done";
    }
}
