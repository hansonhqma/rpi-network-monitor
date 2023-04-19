--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

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
-- Name: buildings; Type: TABLE; Schema: public; Owner: networkmon
--

CREATE TABLE public.buildings (
    id integer NOT NULL,
    name text
);


ALTER TABLE public.buildings OWNER TO networkmon;

--
-- Name: gateways; Type: TABLE; Schema: public; Owner: networkmon
--

CREATE TABLE public.gateways (
    id inet NOT NULL,
    building_id integer
);


ALTER TABLE public.gateways OWNER TO networkmon;

--
-- Name: test_events; Type: TABLE; Schema: public; Owner: networkmon
--

CREATE TABLE public.test_events (
    datetime timestamp without time zone NOT NULL,
    gateway_id inet,
    rtt double precision
);


ALTER TABLE public.test_events OWNER TO networkmon;

--
-- Data for Name: buildings; Type: TABLE DATA; Schema: public; Owner: networkmon
--

COPY public.buildings (id, name) FROM stdin;
0	union
1	sage laboratory
\.


--
-- Data for Name: gateways; Type: TABLE DATA; Schema: public; Owner: networkmon
--

COPY public.gateways (id, building_id) FROM stdin;
129.161.139.254	0
129.161.39.254	1
\.


--
-- Data for Name: test_events; Type: TABLE DATA; Schema: public; Owner: networkmon
--

COPY public.test_events (datetime, gateway_id, rtt) FROM stdin;
2023-03-27 11:02:22	129.161.139.254	5.468
2023-03-27 23:06:11.140101	129.161.139.254	5.468
2023-03-27 23:10:52.006949	129.161.39.254	5.448739
2023-03-27 23:59:43.291785	129.161.39.254	3
2023-03-28 00:12:22.847471	129.161.39.254	2.54554
2023-03-28 00:13:57.843494	129.161.39.254	7.689
\.


--
-- Name: buildings building_pkey; Type: CONSTRAINT; Schema: public; Owner: networkmon
--

ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT building_pkey PRIMARY KEY (id);


--
-- Name: gateways gateway_pkey; Type: CONSTRAINT; Schema: public; Owner: networkmon
--

ALTER TABLE ONLY public.gateways
    ADD CONSTRAINT gateway_pkey PRIMARY KEY (id);


--
-- Name: test_events test_events_pkey; Type: CONSTRAINT; Schema: public; Owner: networkmon
--

ALTER TABLE ONLY public.test_events
    ADD CONSTRAINT test_events_pkey PRIMARY KEY (datetime);


--
-- Name: gateways gateway_building_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: networkmon
--

ALTER TABLE ONLY public.gateways
    ADD CONSTRAINT gateway_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.buildings(id) ON DELETE CASCADE;


--
-- Name: test_events test_events_gateway_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: networkmon
--

ALTER TABLE ONLY public.test_events
    ADD CONSTRAINT test_events_gateway_id_fkey FOREIGN KEY (gateway_id) REFERENCES public.gateways(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

