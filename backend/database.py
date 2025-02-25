from sqlalchemy import create_engine, Column, Integer, String, MetaData, Table
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@localhost/matches"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

metadata = MetaData()

matches_table = Table(
    "matches", metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String, nullable=False),
    Column("time", String, nullable=False),
)

metadata.create_all(engine)
