import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../../../../categories/infra/typeorm/entities/Category";

@Entity("videos")
class Video {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }


}

export { Video };