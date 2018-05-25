import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {feedextrainfo} from "./feedextrainfo";


@Entity("users")
export class users {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"UserId"
        })
    UserId:number;
        

   
    @OneToOne(type=>feedextrainfo, feedextrainfo=>feedextrainfo.FeedOwnerId)
    feedextrainfo:feedextrainfo;
    

   
    @OneToOne(type=>feedextrainfo, feedextrainfo2=>feedextrainfo2.ReaderId)
    feedextrainfo2:feedextrainfo;
    
}
