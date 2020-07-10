--DATABSE NAME--
-- koalas_db -- 

--TABLE FORMAT--
CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(20) not null,
	"age" INTEGER,
	"gender" varchar(6),
	"ready_to_transfer" boolean,
	"notes" varchar(150)
	);


--ORIGINAL SUPPLIED DATABASE INFORMATION--
    INSERT INTO "koalas" ("name","age","gender", "ready_to_transfer", "notes") 
	VALUES ('Scotty', '4', 'M', 'True','Born in Guatemala' ),
		('Jean', '5', 'F', 'True','Allergic to lots of lava' ),
		('Ororo', '7', 'F', 'False','Loves lisening to Paula (Abdul)' ),
		('Logan', '15', 'M', 'False','Loves the sauna' ),
		('Charlie', '9', 'M', 'True','Favorite band is Nirvana' ),
		('Betsy', '4', 'F', 'True','Has a pet iguana' );