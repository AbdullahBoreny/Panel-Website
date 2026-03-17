--
-- PostgreSQL database dump
--

\restrict afX4BrAqlvzcb3uS9FuvSaaijeyVobBeEG1QZvC8F6oEFdnorSPsn9k3NZx1fdO

-- Dumped from database version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: abdbor
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255)
);


ALTER TABLE public.books OWNER TO abdbor;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: abdbor
--

ALTER TABLE public.books ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: usernames; Type: TABLE; Schema: public; Owner: abdbor
--

CREATE TABLE public.usernames (
    id integer NOT NULL,
    username character varying(255)
);


ALTER TABLE public.usernames OWNER TO abdbor;

--
-- Name: usernames_id_seq; Type: SEQUENCE; Schema: public; Owner: abdbor
--

ALTER TABLE public.usernames ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usernames_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: abdbor
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255),
    password character varying(255)
);


ALTER TABLE public.users OWNER TO abdbor;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: abdbor
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: abdbor
--

COPY public.books (id, title) FROM stdin;
1	To Kill a Mockingbird
2	The Alchemist
3	Crime And Punishment
\.


--
-- Data for Name: usernames; Type: TABLE DATA; Schema: public; Owner: abdbor
--

COPY public.usernames (id, username) FROM stdin;
1	Bryan
2	Odin
3	Damon
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: abdbor
--

COPY public.users (id, name, password) FROM stdin;
1	Bryan	123
2	Odin	321
3	Damon	222
4	Abdullah	44444
5	asd	sad
6	asd	sad
7	asd	sad
8	\N	\N
9	\N	\N
10	asd	sad
11	asd	sad
12	asd	sad
13	\N	\N
14	asd	sad
15	asd	sad
16	\N	\N
17	asd	sad
18	asd	sad
19	\N	\N
20	\N	\N
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: abdbor
--

SELECT pg_catalog.setval('public.books_id_seq', 3, true);


--
-- Name: usernames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: abdbor
--

SELECT pg_catalog.setval('public.usernames_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: abdbor
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: abdbor
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: usernames usernames_pkey; Type: CONSTRAINT; Schema: public; Owner: abdbor
--

ALTER TABLE ONLY public.usernames
    ADD CONSTRAINT usernames_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: abdbor
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict afX4BrAqlvzcb3uS9FuvSaaijeyVobBeEG1QZvC8F6oEFdnorSPsn9k3NZx1fdO

