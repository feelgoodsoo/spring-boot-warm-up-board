package com.demo.backend.repository;

import org.springframework.stereotype.Repository;

import com.demo.backend.entitiy.ServiceUser;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<ServiceUser, String> {
}
