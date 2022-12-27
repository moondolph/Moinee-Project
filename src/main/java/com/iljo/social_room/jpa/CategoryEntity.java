package com.iljo.social_room.jpa;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Category")
public class CategoryEntity {
    @Id
    @Column(nullable = false, length = 10)
    private String category_name;
}
